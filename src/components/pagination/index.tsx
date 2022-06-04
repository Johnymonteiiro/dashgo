import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItems } from "./PaginationItems";


export function Pagination (){

    return(
        <Stack
          direction={["column", "row"]}
          spacing="6"
          mt="8"
          justify="space-between"
          align="center"
        >
          <Box>
              <strong>0</strong> - <strong>10</strong> ate <strong>100</strong>
          </Box>
           <Stack direction="row" spacing="2">
             <PaginationItems number={1} isCurrent/>
             <PaginationItems number={2} />
             <PaginationItems number={3} />
             <PaginationItems number={4} />
             <PaginationItems number={5} />
             <PaginationItems number={6} />
           </Stack>
        </Stack>
    )
}