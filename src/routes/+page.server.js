import { fail, redirect } from '@sveltejs/kit';
import { randomInt } from 'crypto';
/** @type {import('./$types').PageServerLoad} */
// export async function load({ cookies }) {
// 	const count = await cookies.get('really?');
// 	return { count };
// }

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const password_raw = data.get('password') ?? "NULL";
        const password = password_raw.trim();
        const count = await cookies.get('really?');
        const expirationDate = new Date();
        expirationDate.setSeconds(expirationDate.getSeconds() + 500);
        if (password == 'รหัสผ่าน') {
            if (count == null) {
                cookies.set('really?', '1', { path: '/', expires: expirationDate });
                return { what : 'ใช่หรอ!?' }
            } else {
                const count_num = parseInt(count);
                cookies.set('really?', String(count_num+1), { path: '/', expires: expirationDate });
                if (count_num == 1) {
                    return { what : 'แน่ใจนะ!?' }
                } else if (count_num == 2) {
                    return { what : 'เดี๋ยว!?' }
                } else if (count_num == 3) {
                    return { what : 'จริงดิ!?' }
                } else if (count_num == 4) {
                    return { what : 'รู้ได้ไง!?' }
                } else if (count_num == 5) {
                    redirect(302, '/doors')
                } else {
                    cookies.delete('really?', { path: '/' });
                }
            }
        } else {
            let random_num = randomInt(1, 5);
            console.log(random_num);
            if (random_num == 1) {
                return { what : 'รหัสผิด ว๊ะ ฮ่าๆ!!' }
            } else if (random_num == 2) {
                return { what : 'รหัสผิดนะจ้ะ!!' }
            } else if (random_num == 3) {
                return { what : 'รหัสผิดอยู่นะ!!' }
            } else if (random_num == 4) {
                return { what : 'Incorrect Password!!' }
            } else if (random_num == 5) {
                return { what : 'ไม่ถูกก!!' }
            }

        }
		return { success: true };
	}
};