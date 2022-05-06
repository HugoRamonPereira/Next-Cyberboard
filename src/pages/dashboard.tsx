import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic"; /* Dynamic is used for lazy loading */
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false}) 

const options = {
   chart: {
      toolbar: {
         show: false,
      },
      zoom: {
         enabled: false,
      },
      foreColor: theme.colors.cyan[500]
   }
};

const series = [
   {name: "series1", data: [5, 20, 65, 19, 109, 48]}
];

export default function Dashboard() {
   return (
      <Flex direction="column" h="100vh">
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start" h={400}>
               <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                  <Text fontSize="lg" mb="4" color="cyan.500">Subscribers of the week</Text>
                  <Chart type="area" height={160} options={options} series={series}/>
               </Box>
               <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                  <Text fontSize="lg" mb="4" color="cyan.500">Opening rate</Text>
                  <Chart type="area" height={160} options={options} series={series}/>
               </Box>
            </SimpleGrid>
         </Flex>
      </Flex>
   )
}