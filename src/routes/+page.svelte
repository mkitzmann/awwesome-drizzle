<script lang="ts">
export let data

$: dataArray = Object.entries(data)
console.log(data)
</script>

{JSON.stringify(data)}

