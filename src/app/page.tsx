'use client'

import { Header } from "@/components/Header";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { Container } from "../components/Container";
import { ListContextProvider } from "@/contexts/ListContext";
import { FormItems } from "@/components/FormItems";
import { ListItems } from "@/components/ListItems";



const Page = () => {


  return (
      <ThemeContextProvider>
        <Container>
          <ListContextProvider>
            <Header />
            <FormItems />
            <ListItems />
          </ListContextProvider>
        </Container>
      </ThemeContextProvider>
    
  )
};

export default Page;

