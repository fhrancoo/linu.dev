const MENUTOGGLE = document.getElementById('menutoggle')
const MENUSECTION = document.getElementById('menuSection')
const SPAN1 = document.getElementById('span1')
const SPAN2 = document.getElementById('span2')
const LOGO = document.getElementById('logo')

export const menuHandler = () => {
    MENUTOGGLE.addEventListener('click', () => {
        MENUSECTION.classList.toggle('hidden')
        MENUSECTION.classList.toggle('flex')
        SPAN1.classList.toggle('translate-y-1.5')
        SPAN1.classList.toggle('rotate-45')
        SPAN2.classList.toggle('w-4')
        SPAN2.classList.toggle('-translate-y-1.5')
        SPAN2.classList.toggle('-rotate-45')
        LOGO.classList.toggle('text-slate-900')
    })
}
