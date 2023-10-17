'use client'

import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { Header } from "@/components/Header";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { Container } from "../components/Container";
import { ListContextProvider } from "@/contexts/ListContext";
import { FormItems } from "@/components/FormItems";
import { ListItems } from "@/components/ListItems";



const Page = () => {


  return (
    <HydrationProvider>
      <Client>
        <ThemeContextProvider>
          <Container>
            <ListContextProvider>
              <Header />
              <FormItems />
              <ListItems />
            </ListContextProvider>
          </Container>
        </ThemeContextProvider>
      </Client>
    </HydrationProvider>

  )
};

export default Page;

