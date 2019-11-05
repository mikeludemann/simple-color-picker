# Simple Color Picker

A simple color picker with HEX and RGA values

## Example

```
<label for="colorPicker">Choose a color:</label>
<input type="color" value="#00ff00" id="colorPicker">

<script>
const input = document.getElementById("colorPicker");

setColor();
input.addEventListener("input", setColor);

</script>
```