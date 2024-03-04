import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { GoChevronRight } from "react-icons/go"
 
import { cn } from "@/shared/lib/utils.ts"
 
const Accordion = AccordionPrimitive.Root
 
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
 
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex items-center justify-center transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <GoChevronRight className="h-[25px] w-[25px] shrink-0 transition-transform duration-200 fill-[#0369a1]" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
 
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-left data-[state=open]:animate-accordion-right"
    {...props}
  >
    <div className={cn("pb-0 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
 
AccordionContent.displayName = AccordionPrimitive.Content.displayName
 
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }