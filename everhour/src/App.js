import logo from './logo.svg';
import './App.css';
import {HStack,Tabs, TabList, TabPanels, Tab, TabPanel, Img, Box, Text, Button, Input, Grid, GridItem, ListItem, UnorderedList} from "@chakra-ui/react";

function App() {
  return (
    <div>
      {/* navbar */}

      <Box h="auto" display={"flex"} p={"10px"} fontSize={"lg"} position={"sticky"} top={"10px"} bgColor={"white"}>
        <Box display={"flex"} w="80%" ml={"50px"} gap={"30px"} alignItems={"center"}>
          <Text>Everhour</Text>
          <Text>Integrations</Text>
          <Text>Pricing</Text>
          <Text>Demo</Text>
        </Box>
        <Box display={"flex"} w="20%" alignItems={"center"} mr={"50px"} gap={"30px"}>
          <Text>Log in</Text>
          <Button bgColor={"#57bb71"} color={"white"}>Sign up</Button>
        </Box>
      </Box>

      {/* About */}

      <Box w={"60%"} m={"20px auto auto auto"} p={"40px"} textAlign={"center"}>
          <Text fontSize={"5xl"}>Powerful time tracking software with hassle-free integrations</Text>
          <Text fontSize={"2xl"}>Accurate time tracker for budgeting, client invoicing and painless payroll. Works with the apps your team already use</Text>
          <Box w={"80%"} m={"20px auto auto auto"} display={"flex"} alignItems={"center"} p={"10px"} justifyContent="space-around">
            <Input placeholder='Work email...' size={"lg"} w={"70%"} />
            <Button bgColor={"#57bb71"} color={"white"} size={"lg"}>Try free</Button>
          </Box>
      </Box>

      {/* Tab section */}

      <HStack w="80%" h="auto" m="auto" mt="30px">
      <Tabs p="20px 80px">
        <TabList>
          <Tab>Time tracking</Tab>
          <Tab>Billing and budgeting</Tab>
          <Tab>Task management</Tab>
          <Tab>Visual planning</Tab>
          <Tab>Expenses</Tab>
          <Tab>Invoicing</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp' />
          </TabPanel>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/time-tracking-timesheet-view.webp' />
          </TabPanel>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp' />
          </TabPanel>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/projects-board-view-v3.webp' />
          </TabPanel>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp' />
          </TabPanel>
          <TabPanel>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/summary-dashboard-v4.webp' />
          </TabPanel>
        </TabPanels>
      </Tabs>
      </HStack>

      {/* Track time section */}

      <Box m={"20px auto auto auto"} w={"60%"} textAlign={"center"}>
        <Text fontSize={"5xl"}>Track time and watch progress inside two dozen popular apps</Text>
      </Box>
      <Box w={"80%"} m={"20px auto 20px auto"} display={"grid"} gridTemplateColumns={"repeat(7,1fr)"} gap={"30px"} alignItems={"center"}>
          <div>
            <Img src='https://assets.themuse.com/uploaded/companies/360/small_logo.png ' />
          </div>
          <div>
            <Img src='https://i.pcmag.com/imagery/reviews/04C2m2ye5UfXyb5x5WWIsZ4-19..v1625759628.png' />
          </div>
          <div>
            <Img src='https://www.pngkey.com/png/full/213-2134771_basecamp-3-launched-new-way-to-work-with.png' />
          </div>
          <div>
            <Img src='https://jira.thomsonreuters.com/images/atlassian-jira-logo-large.png' />
          </div>
          <div>
            <Img src='https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg' />
          </div>
          <div>
            <Img src='https://clickup.com/landing/images/logo_on-purple_vert.png' />
          </div>
          <div>
            <Img src='https://www.freelogovectors.net/wp-content/uploads/2022/01/notionlogo-freelogovectors.net_.png' />
          </div>
      </Box>

      {/* Review section */}

      <Grid w={"80%"} m={"40px auto 20px auto"} templateColumns={"repeat(2,1fr)"} templateRows={"repeat(2,1fr)"} gap={"10px"} p={"30px 0 30px 60px"}>
        <GridItem colSpan={"1"}>
            <Text fontSize={"4xl"}>Everhour has helped 240,000+ people complete over 135 million tasks in 3 million projects</Text>
        </GridItem>
        <GridItem colSpan={"1"} rowSpan={"2"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp' />
        </GridItem>
        <GridItem colSpan={"1"} p={"10px 0 10px 50px"} mt={"-40px"}>
            <Text w={"80%"} fontSize={"lg"}>Everhour helps us track our engineering hours which is a requirement for several Government grants we have received. Without Everhour, we would be unable to accurately track the hours associated with each individual project we are working on as a company. The reports are easily customizable which allows me to extract the data I need. Everhour is a great tool for our time tracking needs!</Text>
            <Text fontWeight={"bold"} mt={"10px"}>Kelly Bonneau, CPA</Text>
            <Text fontWeight={"bold"}>Accounting Manager at 7shifts</Text>
        </GridItem>
      </Grid>

      {/* Take control section */}

      <Box w={"80%"} m={"20px auto 20px auto"} display={"flex"} justifyContent={"space-between"}>
        <Box w={"60%"} p={"20px"}>
            <Text fontSize={"4xl"}>Take control of your time with Everhour</Text>
            <Text fontSize={"2xl"} color={"gray"}>Beautiful integrations. Intuitive interface. No unexpected fees</Text>
            <Box w={"80%"} m={"20px auto auto auto"} display={"flex"} alignItems={"center"} p={"10px"} justifyContent="space-around">
              <Input placeholder='Work email...' size={"lg"} w={"70%"} />
              <Button bgColor={"#57bb71"} color={"white"} size={"lg"} p={"10px 40px"}>Try free</Button>
            </Box>
        </Box>
        <Box w={"35%"} p={"20px 0 20px 40px"}> 
            <UnorderedList fontSize={"lg"}>
              <ListItem>Track time from the apps you already use</ListItem>
              <ListItem>Know where your team’s time is going</ListItem>
              <ListItem>Keep projects on budget</ListItem>
              <ListItem>Increase transparency</ListItem>
              <ListItem>Make your workflow more efficient</ListItem>
              <ListItem>Spot burnout before it happens</ListItem>
            </UnorderedList>
        </Box>
      </Box>

      {/* Footer */}

      <Box border={"1px"} bg={"#151616"} m={"5% auto 40px auto"} p={"5%"}>
        <Box w={"80%"} m={"auto"} color={"white"} display={"flex"} justifyContent={"space-around"} lineHeight={"30px"}>
          <Box>
            <Text color={"#8a8a8a"}>Company</Text>
            <Text>About us</Text>
            <Text>Contact</Text>
          </Box>
          <Box>
            <Text color={"#8a8a8a"}>Product</Text>
            <Text>Tour</Text>
            <Text>Pricing</Text>
            <Text>Request a demo</Text>
            <Text>Customers</Text>
            <Text>API & docs</Text>
          </Box>
          <Box>
            <Text color={"#8a8a8a"}>Solutions</Text>
            <Text>Time tracking</Text>
            <Text>Project budgetting</Text>
            <Text>Visual planning</Text>
            <Text>Expenses</Text>
            <Text>Reporting</Text>
            <Text>Invoicing</Text>
            <Text>Time card calculator</Text>
            <Text>Weekly timesheet template</Text>
            <Text>Invoice generator</Text>
          </Box>
          <Box>
            <Text color={"#8a8a8a"}>Integrations</Text>
            <Text>Asana</Text>
            <Text>Basecamp</Text>
            <Text>Trello</Text>
            <Text>Jira</Text>
            <Text>GitHub</Text>
            <Text>ClickUp</Text>
            <Text>Monday</Text>
            <Text>Notion</Text>
            <Text>Todoist</Text>
            <Text>GitLab</Text>
            <Text>All</Text>
          </Box>
          <Box>
            <Text color={"#8a8a8a"}>Learn</Text>
            <Text>Resources</Text>
            <Text>Help center</Text>
            <Text>Blog</Text>
            <Text>Product update</Text>
            <Text>Timesheet app</Text>
            <Text>Time clock app</Text>
            <Text>Attendance tracker</Text>
            <Text>Work hours tracker</Text>
            <Text>Employee time tracking</Text>
          </Box>
          <Box>
            <Text color={"#8a8a8a"}>Download</Text>
            <Text>Browser extension</Text>
            <Text>Chrome time tracking extension</Text>
            <Text>Time tracking with screenshots</Text>
            <Text>Iphone app</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
