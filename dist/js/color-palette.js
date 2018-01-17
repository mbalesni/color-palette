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
    position: 'topRight',
    timeout: '1500',
    progressBar: false,
    animateInside: false,
    close: false
  })
})
