<template>
  <div class="print-barcode">
    <h1>test print </h1>

    <table style="border: 1px solid rgb(0, 0, 0);width: 100%;">
      <tr>
        <td style="border: 1px solid #000">منتج 1</td>
        <td style="border: 1px solid #000">بيتزا 1</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000">منتج 1</td>
        <td style="border: 1px solid #000">بيتزا 1</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000">منتج 1</td>
        <td style="border: 1px solid #000">بيتزا 1</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000">منتج 1</td>
        <td style="border: 1px solid #000">بيتزا 1</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000">منتج 1</td>
        <td style="border: 1px solid #000">بيتزا 1</td>
      </tr>
    </table>

  </div>
</template>

<script>
import { ipcRenderer } from 'electron'


export default {

  created(){
      ipcRenderer.on('printBarCodeNow', (e, arg) => {
        console.log(arg)
          ipcRenderer.send("printBarCodeNow", arg)
      })
  }
}
</script>

<style>
</style>