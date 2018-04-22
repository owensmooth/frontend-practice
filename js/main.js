const menu = document.querySelector('.c-navigation__menu')
const menuCollapse = document.querySelector('.c-navigation__links-collapse')
const links = document.querySelector('.c-navigation__links')
const linksActiveClass = 'c-navigation__links--active'

const toggleMenu = () => {
  if (links.className.includes(linksActiveClass)) {
    return links.classList.remove(linksActiveClass)
  }

  return links.classList.add(linksActiveClass)
}

menu.addEventListener('click', toggleMenu)
menuCollapse.addEventListener('click', toggleMenu)
