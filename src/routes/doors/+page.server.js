import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const count = await cookies.get('youcantseeme');
    const check = await cookies.get('really?');
    if (check != "6") {
        redirect(302, "./")
    }
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + 4800);
    if ( count == null ) {
        cookies.set('youcantseeme', '1', { path: '/', expires: expirationDate });
    } else if ( count == '22' ) {
        cookies.delete('youcantseeme', {path: '/'});
        return { reveal : true }
    } else {
        const count_num = parseInt(count);
        cookies.set('youcantseeme', String(count_num+1), { path: '/', expires: expirationDate });
    }
}