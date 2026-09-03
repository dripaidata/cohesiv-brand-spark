import ServicePageShell from "@/components/site/ServicePageShell";

const ProductDevelopment = () => (
  <ServicePageShell
    eyebrow="Services"
    title={
      <>
        Product <em className="text-cyan not-italic">Development</em>
      </>
    }
    intro="Production-grade products built end to end, the same way we build our own internal systems."
    seoTitle="Product Development - Drip AI & Data"
    seoDescription="End-to-end product development for data and AI products, from prototype to production system."
    path="/product-development"
  />
);

export default ProductDevelopment;
