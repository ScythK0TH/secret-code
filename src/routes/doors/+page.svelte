<script>
    import door from '$lib/doors/door.png';
    import door4 from '$lib/doors/door4.png';
    export let data;
    let passkey = "";
    let reveal2 = false;
    let doorcontext = 0;
    let revealcontext = "fadeOut";
    console.log(passkey)
    function door1func(){
        doorcontext = 1;
        revealcontext = "fadeIn";
    }
    function door2func(){
        doorcontext = 2;
        revealcontext = "fadeIn";
    }
    function door3func(){
        doorcontext = 3;
        revealcontext = "fadeIn";
    }
    function door4func(){
        doorcontext = 4;
        revealcontext = "fadeIn";
    }
    function doorclosefunc(){
        revealcontext = "fadeOut";
    }
    /**
	 * @param {{ key: any; }} event
	 */
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

<div id="account_UI" class="fixed w-full h-full z-10 {revealcontext}">
	<div
		id="AUI"
		class="mt-[20vh] h-[60vh] mw-[90vh] m-auto z-10"
		style="background-color: black; border: solid white; box-shadow: 0 0 1.5vh white; border-radius: 2vh;"
	>
        <!-- <div style="color: white; font-size: 10vh;">X</div> -->
		<p style="color: white; font-size: 7vh; text-align: center; margin-bottom: 2vh; text-shadow: 0 0 1vh white;">
			{#if (doorcontext == 1)}ประตูที่ 1{:else if (doorcontext == 2)}ประตูที่ 2{:else if (doorcontext == 3)}ประตูที่ 3{:else if (doorcontext == 4)}ประตูที่ 4{/if}
		</p>
		<p style="color: white; font-size: 3vh; text-align: center; padding-bottom: 2vh;">
			[<span style="color: red">{#if (doorcontext == 1)}นิทานอีสป เรื่อง หนูกับมด{:else if (doorcontext == 2)}นิทานอีสป เรื่อง ชายขี้เกียจ{:else if (doorcontext == 3)}นิทานอีสป เรื่อง ผึ้งกับเต่าทอง{:else if (doorcontext == 4)}ยินดีด้วยครับ!!{/if}</span>]
		</p>
        <div class="h-[30vh]">
        <p id="context" style="color: white; font-size: 2vh; text-align: center; padding-bottom: 2vh;">
            {#if (doorcontext == 1)}ณ ลานดินแห่งหนึ่ง หนูกับมดสร้างรังอยู่ใกล้ ๆ กัน ต่อมาไม่นานเกิดฝนตกหนัก ทั้งรังหนูและรังมดที่อยู่ใต้ดิน ถูกน้ำท่วม ทำให้ฝูงมดจมน้ำตายไปเป็นจำนวนมาก ส่วนพวกหนูไม่เป็นอะไรเลย พวกมดสงสัยจึงถามหนูว่า "ทำไมพวกเจ้าถึงรอดจากน้ำท่วมมาได้ล่ะ" หนูจึงตอบว่า "ก็เพราะว่าพวกข้าทำทางเข้าบ้านไว้สองทางยังไงล่ะ พอทำท่วมทางแรก พวกเราก็รีบหนีออกไปทางที่สองได้ทัน"{:else if (doorcontext == 2)}
            ชายคนหนึ่งมีนิสัยเป็นคนเกียจคร้านมาก ต่อให้มีสิ่งดี ๆ เข้ามากองอยู่ตรงหน้าเขาก็ยังขี้เกียจที่จะหยิบขึ้นมา วันหนึ่งเทพเจ้าอยากทดสอบดูว่าชายคนนี้จะเกียจคร้านมากเพียงใด ท่านจึงนำ "ความโชคดี" ใส่ไว้ในกะละมังใบหนึ่งแล้ววางไว้ตรงหน้าเขา ปรากฏว่าเขาไม่สนใจแม้แต่น้อย แถมยังเหยียบลงไปในกะละมังจนความโชคดีกระเด็นหายไปอีก เทพเจ้าเห็นความขี้เกียจของชายคนนี้จึงได้แต่พูดว่า "ถ้าเช่นนั้น เจ้าก็เป็นคนโชคร้ายตลอดไปแล้วกัน"{:else if (doorcontext == 3)}
            ผึ้งตัวหนึ่งคิดอยากจะแกล้งเต่าทองซึ่งเป็นเพื่อนของมัน จึงชวนเต่าทองมากินอาหารเย็นที่รัง เมื่อเต่าทองมาถึงรัง ผึ้งก็นำรังผึ้งและรวงผึ้งมาให้เต่าทอง ซึ่งเต่าทองเป็นแมลงที่กินใบไม้เป็นอาหาร เต่าทองกินน้ำผึ้งไปได้นิดเดียวก็บินกลับรังของมัน  วันต่อมาเต่าทองคิดอยากจะเอาคืน จึงชวนผึ้งมากินอาหารที่รังของมันบ้าง เมื่อผึ้งมาถึงเต่าทองก็เอาใบไม้มาให้ผึ้งกิน แต่ผึ้งกินไม่ได้ต้องบินกลับรังไป เต่าทองจึงนั่งหัวเราะด้วยความชอบใจ{:else if (doorcontext == 4)}
            ในที่สุดก็เจอผมแล้วว คงจะปวดหัวมากเลยกว่าจะมาถึงจุดนี้ <br> ผมชื่อ "ออสการ์" นะ ยินดีที่ได้รู้จัก<br> IG: oscar_legend.m <br>Congrat ครับ{/if}
        </p></div>
            <div style="text-align: center;"><button class="button-24" role="button" on:click={doorclosefunc}>CLOSE</button>
            </div>
	</div>
</div>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="doorslist">
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 1" on:click={door1func}/>
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 2" on:click={door2func}/>
    <img id="doors" class="inline-block" src={door} alt="ประตูที่ 3" on:click={door3func}/>
    {#if data?.reveal || reveal2 == true}
    <img id="doors" class="inline-block" src={door4} alt="ประตูที่ 4" on:click={door4func}/>
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
        cursor: pointer;
    }
    #doorslist {
        margin-bottom: 25vh;
        text-align: center;
        z-index: 4;
    }
    #context {
        padding: 2vh;
    }
    .fadeOut {
		visibility: hidden;
		opacity: 0;
		filter: blur(10px);
		transition: all 0.5s
	}
	.fadeIn {
		visibility: visible;
		opacity: 1;
		filter: blur(0px);
		transition: all 0.5s;
	}
    .button-24 {
        background: #ff0000;
        border: 0.1vh solid #FF0000;
        border-radius: 0.6vh;
        box-sizing: border-box;
        box-shadow: 0 0 1vh rgb(255, 0, 0);
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-size: 2vh;
        line-height: 2vh;
        outline: 0;
        padding: 1.2vh 4.4vh;
        text-align: center;
        text-rendering: geometricprecision;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        transition: all 0.25s;
    }

    .button-24:hover,
    .button-24:active {
        background-color: initial;
        background-position: 0 0;
        color: rgb(255, 0, 0);
        transition: all 0.25s;
    }

    .button-24:active {
        opacity: .5;
    }
</style>