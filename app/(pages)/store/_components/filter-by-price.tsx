import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

export default function FilterByPrice() {
  return (
    <AccordionItem value="price">
      <AccordionTrigger>Price</AccordionTrigger>
    </AccordionItem>
  );
}
