import {
  Container,
  Download,
  InputLink
} from './styles'
import { useEffect, useState } from 'react'

import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQRCodeLink] = useState('')

  function handleQRCode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function (err, url) {
      setQRCodeLink(url)
    })
  }
  function findOS() {
    var curOS = "Not Nmaed...";
    if (navigator.appVersion.indexOf("Win") != -1) curOS = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) curOS = "MacOS";
    if (navigator.appVersion.indexOf("ios") != -1) curOS = "MacOS";
    if (navigator.appVersion.indexOf("Mac") != -1) curOS = "MacOS";
    alert('Your OS: ' + curOS);
  }

  useEffect(() => {
    findOS()
    console.log(`A sua plataforma é : ${window.navigator.platform.os}`)
  }, [])

  return (
    <>
      <Container>
        <QRCode
          value={link}
        />

        <InputLink
          placeholder='Digite seu link aqui...'
          value={link}
          onChange={(e) => handleQRCode(e)}
        />

        <Download
          href={qrcodeLink}
          download={`qrcode.png`}
        >
          Baixar QRCode
        </Download>
      </Container>
    </>

  )
}

export default App
