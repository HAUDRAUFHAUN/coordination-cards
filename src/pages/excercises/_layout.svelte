<!-- routify:options name="excercise" -->
<script>
  import { url } from "@roxi/routify";
</script>

<div class="mb-2 md:mb-4 2xl:mb-6" id="goback">
  <a href={$url("../")} class="underline">Go back</a>
</div>
<br />
<slot />

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
