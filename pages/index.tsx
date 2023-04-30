import Cliente from "@/components/cliente";
import Estacion from "@/components/estacion";
import Explicacion from "@/components/explicacion";
import Factura from "@/components/factura";
import Total from "@/components/total";

export default function Home() {
  return (
    <main className="grid p-4 md:grid-cols-2">
      <section>
      <Factura />
      <Cliente />
      <Estacion/>
      <Total/>
      </section>
      <section className="mx-4">
<Explicacion/>
      </section>
    </main>
  );
}
