// Download manga v1.0.1

Cookies.set('download', 0, { expires: 1, path: '/' })
var downloadUrls = [],
  downloadNames = [],
  currentIndex = 0,
  zip,
  zipName = 'hentai2read.cbz',
  progessContainer = $('#progessContainer'),
  progressBar = $('#progressbar'),
  downloadCount = Cookies.get('download'),
  permit = true
//$('#dl-button').click

var downloadManga = function (_data) {
   // data.manga, data.path, data.name
  if (JSZip.support.blob) {
    if (permit) {
      var data = _data ? _data : $(this).data(),
        count = 1
      progessContainer.show()
      ARFfwk.doAjax.call(
        {
          controller: 'manga',
          action: 'download',
          mangaId: data.manga,
          path: data.path,
        },
        function (r) {
          downloadUrls = []
          downloadNames = []
          $.each(r.images, function (i, image) {
            downloadUrls.push('//static.hentaicdn.com/hentai' + image)
            downloadNames.push(pad(count, 3) + '.jpg')
            count++
          })
          zip = new JSZip()
          currentIndex = 0
          if (data.name) {
            zipName = data.name + '.cbz'
          }
          downloadNextImage()
        }
      )
    } else
      progessContainer
        .show()
        .html(
          '<b class="text-danger">Daily download limit reached, please login to download more.</b>'
        )
  } else progessContainer.show().html('<b class="text-danger">(not supported on this browser)</b>')
}

/*
function pad(str, max) {
  str = str.toString()
  return str.length < max ? pad('0' + str, max) : str
}
function downloadNextImage() {
  ajaxDownloadBlob(downloadUrls[currentIndex], imageDownloaded)
}
function imageDownloaded(data) {
  var percentage = Math.round(((currentIndex + 1) / downloadUrls.length) * 100)
  progressBar
    .css('width', percentage + '%')
    .text(percentage + '%')
    .attr('aria-valuenow', percentage)
  zip.file(downloadNames[currentIndex], data, { base64: true })
  if (++currentIndex >= downloadUrls.length) {
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, zipName)
      progressBar.text('Completed!!')
      Cookies.set('download', downloadCount++, { expires: 1, path: '/' })
    })
  } else {
    downloadNextImage()
  }
}
function ajaxDownloadBlob(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.response)
    }
  }
  xhr.open('GET', url)
  xhr.responseType = 'arraybuffer'
  xhr.send()
}
*/
