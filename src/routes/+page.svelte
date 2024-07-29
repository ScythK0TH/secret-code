<script>
    import { enhance } from '$app/forms';
    export let form;
</script>

<form method="POST" use:enhance>
    <div class="devicemax m-auto">
        <div class="m-auto text-center mt-[25vh]">
            {#if form?.what}
            <span class="secret text-[10vh]">{form.what}</span>
            {:else}
            <span class="secret text-[10vh]">SECRET CODE</span>
            {/if}

        </div>
        <div class="m-auto text-center mt-[2vh]">
            <input class="inputcode text-center" name="password" placeholder="Enter Secret Code Here">
        </div>
    </div>
</form>


<style>
    * {
        font-family: 'Kode Mono';
    }
    .devicemax {
        padding: 4vh;
    }
    .secret {
        background: linear-gradient(to right, rgb(255, 0, 0) , rgb(145, 0, 0));
        background-clip: text;
        color: transparent;
    }
    .inputcode{
        background: none; 
        width: 100%;
        max-width: 75vh;
        font-size: 4vh;
        border: 0.1vh solid red; 
        border-radius: 1vh;
        color: white;
        transition: all 0.5s;
    }
    .inputcode:hover {
        border: 0.1vh solid white; 
    }
    .inputcode::placeholder{
        color: rgba(255, 255, 255, 0.644);
    }
    @media only screen and (max-width: 385px) {
        .secret {
            font-size: 5vh;
        }
        .inputcode {
            font-size: 2vh;
        }
        .devicemax {
            padding: 2vh;
        }
    }

</style>