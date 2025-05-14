"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon, InfoIcon, ChevronDownIcon } from "lucide-react";
import { BarChart, Bar } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="container mx-auto flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
          <Separator orientation="vertical" className="h-8" />
          <h1 className="text-2xl font-semibold">shadcn/ui Showcase</h1>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <BellIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://api.placeholder.com/100"
                    alt="User avatar"
                  />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 md:w-[400px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="display">Display</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6">
              {/* Alert Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Alert Components</h2>
                <div className="grid gap-4">
                  <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert with important details.
                    </AlertDescription>
                  </Alert>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Item</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </section>

              <Separator />

              {/* Basic Inputs Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Basic Inputs</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Buttons</CardTitle>
                      <CardDescription>
                        Various button styles and states
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button disabled>Disabled</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Form Controls</CardTitle>
                      <CardDescription>
                        Text inputs and related controls
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                          Accept terms and conditions
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Select & Dropdown Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Dropdowns & Selects
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Select Component</CardTitle>
                      <CardDescription>
                        Standard form select controls
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="mx">Mexico</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Dropdown Menu</CardTitle>
                      <CardDescription>
                        Interactive dropdown menus
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button>
                            Options
                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>New Project</DropdownMenuItem>
                          <DropdownMenuItem>Open</DropdownMenuItem>
                          <DropdownMenuItem>Save</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Export</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Dialog & Popover Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Dialogs & Popovers
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dialog</CardTitle>
                      <CardDescription>Modal dialog component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              youre done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="dialog-name">Name</Label>
                              <Input
                                id="dialog-name"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="dialog-username">Username</Label>
                              <Input
                                id="dialog-username"
                                placeholder="Enter your username"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Popover</CardTitle>
                      <CardDescription>
                        Floating content overlay
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline">Show Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium leading-none">
                                Dimensions
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Set the dimensions for the layer.
                              </p>
                            </div>
                            <div className="grid gap-2">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input
                                  id="width"
                                  defaultValue="100%"
                                  className="col-span-2 h-8"
                                />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Height</Label>
                                <Input
                                  id="height"
                                  defaultValue="25px"
                                  className="col-span-2 h-8"
                                />
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Data Display Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Data Display Components
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cards</CardTitle>
                      <CardDescription>
                        Versatile content containers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Cards are used to group and display content in a way
                        thats easily readable.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button className="ml-2">Save</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Accordion</CardTitle>
                      <CardDescription>
                        Vertically collapsing elements
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Is it styled?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It comes with default styles that matches the
                            other components.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Is it animated?</AccordionTrigger>
                          <AccordionContent>
                            Yes. Its animated by default, but you can disable it
                            if you prefer.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Feedback & Progress Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Feedback Components
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress</CardTitle>
                      <CardDescription>
                        Displays completion progress
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Default</Label>
                          <span className="text-sm">60%</span>
                        </div>
                        <Progress value={60} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Indeterminate</Label>
                        </div>
                        <Progress />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Badge & Toggle</CardTitle>
                      <CardDescription>
                        Status indicators and toggles
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="dark-mode" />
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Avatar & User Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">User Components</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Avatar</CardTitle>
                      <CardDescription>User profile pictures</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src="https://api.placeholder.com/100"
                          alt="User"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src="https://api.placeholder.com/100"
                          alt="User"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="https://api.placeholder.com/100"
                          alt="User"
                        />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>User Card</CardTitle>
                      <CardDescription>
                        Combined user profile components
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src="https://api.placeholder.com/100"
                            alt="User"
                          />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-sm font-medium">Jane Doe</h3>
                          <p className="text-sm text-muted-foreground">
                            jane.doe@example.com
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">Pro User</Badge>
                            <Badge variant="secondary">Admin</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <ChartContainer
                config={chartConfig}
                className="min-h-[200px] w-full"
              >
                <BarChart accessibilityLayer data={chartData}>
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="mt-6">
            <div className="grid gap-6">
              {/* Input Components Content */}
              <h2 className="text-xl font-semibold">Input Components</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Buttons Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>
                      Various button styles and states
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button disabled>Disabled</Button>
                  </CardContent>
                </Card>

                {/* Input Fields Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Form Controls</CardTitle>
                    <CardDescription>
                      Text inputs and related controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="input-name">Name</Label>
                      <Input id="input-name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="input-email">Email</Label>
                      <Input
                        id="input-email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="input-terms" />
                      <Label htmlFor="input-terms">
                        Accept terms and conditions
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Select Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Component</CardTitle>
                    <CardDescription>
                      Standard form select controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="input-country">Country</Label>
                      <Select>
                        <SelectTrigger id="input-country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="mx">Mexico</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Switch Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Toggle Components</CardTitle>
                    <CardDescription>Switches and checkboxes</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Switch id="input-airplane-mode" />
                      <Label htmlFor="input-airplane-mode">Airplane Mode</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="input-dark-mode" />
                      <Label htmlFor="input-dark-mode">Dark Mode</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="input-marketing" />
                      <Label htmlFor="input-marketing">
                        Receive marketing emails
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="input-newsletter" defaultChecked />
                      <Label htmlFor="input-newsletter">
                        Subscribe to newsletter
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="display" className="mt-6">
            <div className="grid gap-6">
              {/* Display Components Content */}
              <h2 className="text-xl font-semibold">Display Components</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Cards Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cards</CardTitle>
                    <CardDescription>
                      Versatile content containers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Cards are used to group and display content in a way thats
                      easily readable.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="ml-2">Save</Button>
                  </CardFooter>
                </Card>

                {/* Accordion Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion</CardTitle>
                    <CardDescription>
                      Vertically collapsing elements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="display-item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="display-item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the
                          other components.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Avatar Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Avatar</CardTitle>
                    <CardDescription>User profile pictures</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="https://api.placeholder.com/100"
                        alt="User"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="https://api.placeholder.com/100"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://api.placeholder.com/100"
                        alt="User"
                      />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </CardContent>
                </Card>

                {/* Badge Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>Status indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="mt-6">
            <div className="grid gap-6">
              {/* Feedback Components Content */}
              <h2 className="text-xl font-semibold">Feedback Components</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Alert Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts</CardTitle>
                    <CardDescription>
                      Status and notification messages
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Alert>
                      <InfoIcon className="h-4 w-4" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        This is an informational alert with important details.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Alert Dialog Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alert Dialog</CardTitle>
                    <CardDescription>
                      Confirmation dialog for critical actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>

                {/* Progress Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Progress</CardTitle>
                    <CardDescription>
                      Displays completion progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Default</Label>
                        <span className="text-sm">60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Download</Label>
                        <span className="text-sm">25%</span>
                      </div>
                      <Progress value={25} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Indeterminate</Label>
                      </div>
                      <Progress />
                    </div>
                  </CardContent>
                </Card>

                {/* Dialog Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog</CardTitle>
                    <CardDescription>Modal dialog component</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            youre done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="feedback-name">Name</Label>
                            <Input
                              id="feedback-name"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="feedback-username">Username</Label>
                            <Input
                              id="feedback-username"
                              placeholder="Enter your username"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="container mx-auto border-t py-6 mt-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={20}
            className="dark:invert"
          />
          <p className="text-sm text-muted-foreground">
            Showcasing shadcn/ui components with Next.js
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="text-sm text-muted-foreground hover:underline"
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>
          <a
            className="text-sm text-muted-foreground hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </div>
      </footer>
    </div>
  );
}
