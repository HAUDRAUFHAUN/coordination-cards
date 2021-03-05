<script>
  import { metatags } from "@roxi/routify";
  import Card from "@/components/Card.svelte";

  metatags.title = "Koordinationsübungen";
  metatags.description =
    "Stationskarten für Fitnessübungen im Bereich der Koordination";
</script>

<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">
  Koordinationsübungen - Stationskarten
</h1>

<div
  class="w-full flex flex-col space-y-4 md:py-3 md:grid md:gap-2 md:grid-cols-2 lg:gap-3 xl:grid-cols-3"
>
  <Card title="Excercise" thumbnail="https://picsum.photos/1080/480"
    >Some Test Content. Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Incidunt neque eaque quis ea officiis mollitia voluptatum, quibusdam
    praesentium necessitatibus saepe consectetur nostrum explicabo ipsa ullam
    ducimus! Rerum quasi deserunt dolorum!</Card
  >
  <Card title="Excercise 2" thumbnail="https://picsum.photos/1080/480"
    >Some Test Content. Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Incidunt neque eaque quis ea officiis mollitia voluptatum, quibusdam
    praesentium necessitatibus saepe consectetur nostrum explicabo ipsa ullam
    ducimus! Rerum quasi deserunt dolorum!</Card
  >
  <Card title="Another Excercise" thumbnail="https://picsum.photos/1080/480"
    >Some Test Content. Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Incidunt neque eaque quis ea officiis mollitia voluptatum, quibusdam
    praesentium necessitatibus saepe consectetur nostrum explicabo ipsa ullam
    ducimus! Rerum quasi deserunt dolorum!</Card
  >
</div>
