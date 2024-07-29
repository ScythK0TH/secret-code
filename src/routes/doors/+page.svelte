<script>
    import door from '$lib/doors/door.png';
    import door4 from '$lib/doors/door4.png';
    export let data;
    let passkey = "";
    let reveal2 = false;
    let revealfake = "hidden";
    let revealtrue = "hidden";
    console.log(passkey)
    function door1func(){
        revealfake = "show";
    }

    function onkey(event) {
        console.log(event.key)
        switch (event.key) {
            case "ArrowUp":
                passkey += "u";
                break
            case "ArrowDown":
                passkey += "d";
                break
            case "ArrowLeft":
                passkey += "l";
                break
            case "ArrowRight":
                passkey += "r";
                break
            case "b":
                passkey += "b";
                break
            case "a":
                passkey += "a";
                break
            case "Enter":
                if (passkey == "uuddlrlrba") {
                    reveal2 = true;
                } else {
                    passkey = "";
                    reveal2 = false;
                }
                break
        }
    }
</script>

<svelte:window 
    on:keydown={onkey}
/>

<div id="account_UI" class="fixed w-full h-full z-10">
	<div
		id="AUI"
		class="mt-[20vh] h-[60vh] mw-[90vh] m-auto z-10"
		style="background-color: black; border: solid white; box-shadow: 0 0 1.5vh white; border-radius: 2vh;"
	>
        <!-- <div style="color: white; font-size: 10vh;">X</div> -->
		<p
			style="color: white; font-size: 7vh; text-align: center; margin-bottom: 2vh; text-shadow: 0 0 1vh white;"
		>
			ประตูที่ 1
		</p>
		<p style="color: white; font-size: 3vh; text-align: center; padding-bottom: 2vh;">
			[<span style="color: red">ไม่ใช่ประตูนี้นะ 55555555</span>]
		</p>
        <p id="context" style="color: white; font-size: 2vh; text-align: center; padding-bottom: 2vh;">
            ณ ลานดินแห่งหนึ่ง หนูกับมดสร้างรังอยู่ใกล้ ๆ กัน ต่อมาไม่นานเกิดฝนตกหนัก ทั้งรังหนูและรังมดที่อยู่ใต้ดิน ถูกน้ำท่วม ทำให้ฝูงมดจมน้ำตายไปเป็นจำนวนมาก ส่วนพวกหนูไม่เป็นอะไรเลย พวกมดสงสัยจึงถามหนูว่า "ทำไมพวกเจ้าถึงรอดจากน้ำท่วมมาได้ล่ะ" หนูจึงตอบว่า "ก็เพราะว่าพวกข้าทำทางเข้าบ้านไว้สองทางยังไงล่ะ พอทำท่วมทางแรก พวกเราก็รีบหนีออกไปทางที่สองได้ทัน"</p>
	</div>
</div>

<div id="doorslist">
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 1" on:click={door1func}/>
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 2" />
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 3" />
    {#if data?.reveal || reveal2 == true}
    <img id="doors" class="inline-block" src={door4} alt="ประตูที่ 4" />
    {/if}
</div>

<style>
    * {
        font-family: 'Kode Mono';
    }
    #AUI {
        max-width: 90vh;
    }
    #doors {
        margin-top: 25vh;
    }
    #doorslist {
        margin-bottom: 25vh;
        text-align: center;
        z-index: 4;
    }
    #context {
        padding: 2vh;
    }
</style>