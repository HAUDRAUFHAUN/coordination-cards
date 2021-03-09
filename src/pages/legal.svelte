<script>
  import { url } from "@roxi/routify";
</script>

<div class="mb-2 md:mb-4 2xl:mb-6" id="goback">
  <a href={$url("../")} class=" text-3xl text-gray-900">
    <div class="flex  flex-row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    </div></a
  >
</div>
<br />
<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">Legal notice</h1>
<div class="prose">
  This page is a private project.<br />
  <b>All copyright belongs to the authors of this page.</b>
  <br />
</div>
<br />
<hr />
<br />
<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">Impressum</h1>
<div class="prose">
  Dies ist ein privates Projekt, deshalb besteht keine Impressumspflicht.
  <p>
    <b
      >Die Autoren dieser Seite haben das Copyright auf alle Inhalte dieser
      Seite, insbesondere die Bilder (ausgenommen sind externe, nicht von uns
      erstellte Inhalte). Die Weiterverbreitung dieser Inhalte ist ohne
      ausdrückliche Genehmigung nicht gestattet.</b
    >
  </p>
  <br />
  <br />
  <h3>Kontakt</h3>
  <a href="mailto:streber.hallo@gmail.com">streber.hallo@gmail.com</a>
</div>

<style>
  @media print {
    @page {
      margin: 0.5cm;
    }

    #goback {
      display: none;
    }
  }
</style>
