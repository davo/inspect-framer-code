;(function(d) {
  function loadJS(f) {
    var f = d.createElement('script')
    f.setAttribute('src', f)
  }

  loc = window.location
  if (!(loc.host == 'share.framerjs.com' || loc.host == 'framer.cloud')) {
    alert('Use on share.framerjs.com or framer.cloud')
    return
  }
  var b = new XMLHttpRequest()
  b.onreadystatechange = function() {
    function c(b, c) {
      var e = d.createElement('input')
      e.name = b
      e.value = c
      e.type = 'hidden'
      a.appendChild(e)
    }
    if (b.readyState == 4) {
      var s = d.createElement('link')

      s.setAttribute('rel', 'stylesheet')
      s.setAttribute('data-name', 'vs/editor/editor.main')
      s.setAttribute('type', 'text/css')
      s.setAttribute(
        'href',
        'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/editor/editor.main.css'
      )

      var require = {
        paths: {
          vs:
            'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs'
        }
      }

      loadJS(
        'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/loader.js'
      )
      loadJS(
        'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/editor/editor.main.nls.js'
      )
      loadJS(
        'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/editor/editor.main.nls.js'
      )

//       var a = d.createElement('form')
//       a.action = 'http://validator.w3.org/check'
//       a.method = 'post'
//       a.enctype = 'multipart/form-data'
//       c('fragment', b.responseText)
//       c('prefill', '0')
//       c('doctype', 'Inline')
//       c('prefill_doctype', 'html401')
//       c('group', '1')

      var editor = monaco.editor.create(document.getElementById('container'), {
        value: b.responseText,
        language: 'coffeescript',
        readOnly: false,
        theme: 'vs-dark'
      })

      d.body.appendChild(s)
    }
  }
  b.open('GET', loc.origin + loc.pathname + 'app.coffee', !0)
  b.send('')
})(document)
