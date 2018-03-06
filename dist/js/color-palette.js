function instColorSaving () {
  let tiles = document.querySelectorAll('.tile')
  let clipboard = new ClipboardL(tiles)
  clipboard.on('success', (e) => {
    let clr = ''
    let elem = e.trigger
    if (elem.classList.contains('big')) elem = elem.children[0]
    if (elem.classList.contains('white')) {
      clr = "#fff"
    } else if (elem.classList.contains('black')) {
      clr = '#111'
    }
    iziToast.show({
      title: 'Copied',
      message: e.text,
      titleColor: clr,
      messageColor: clr,
      backgroundColor: e.text,
      position: 'topCenter',
      progressBar: true,
      animateInside: true,
      close: true,
      timeout: 2500
    })
  })
}

function instHexSwitch () {
  let palette = document.querySelector('.palette')
  let btn = document.querySelector('#text-switch')
  btn.addEventListener('click', () => {
    if (!btn.checked) {
      palette.classList.add('no-text')
    } else {
      palette.classList.remove('no-text')
    }
  })
}

instColorSaving()
instHexSwitch()
