<script>
  // get the year for the copyright statement
  var date = new Date();
  var year = date.getFullYear();
</script>

<br />

<footer class="flex flex-row justify-center items-center py-2" id="footer">
  <p>&copy; {year} || <a href="/legal" class="underline">Imprint</a></p>
</footer>

<style>
  @media print {
    footer {
      display: none;
    }
  }
  #footer {
    background: none;
  }
</style>
