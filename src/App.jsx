import {
  Container,
  Download,
  InputLink
} from './styles'
import { useEffect, useState } from 'react'

import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import { getOS } from './utils/getOS'
import { CustomText } from './Components/Text/style'

function App() {

  const [os, setOs] = useState(null)
  const [link, setLink] = useState('')
  const [qrcodeLink, setQRCodeLink] = useState('')

  const androidLink = "https://play.google.com/store/apps/details?id=com.berwanger29.AiraoHub&hl=pt_BR&gl=US"
  const iosLink = "https://apps.apple.com/br/app/apple-music-for-artists/id1366467972"

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

  function openNewtab(e) {
    // alert(e)

    switch (e) {
      case 'Android':
        // window.open(androidLink)
        alert(e)
        break;
      case 'iOS':
        // window.open(iosLink, "_blank", "noopener noreferrer")
        onclick = "location.href='https://example.com'"

        break;
      default:
        console.log(`Você está num computador`);
    }
  }

  useEffect(() => {
    let os = getOS()
    setOs(os)
    
  }, [])


  return (
    <>
      <Container>
        {/* <QRCode
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
        </Download> */}
        {
          os === 'Android' &&
          <a href={androidLink} target="_blank">Abrir na loja.</a>
        }
        {
          os === 'iOS' &&
          <a href={iosLink} target="_blank">Abrir na loja.</a>
        }
        {
          ((os !== 'Android') && (os !== 'iOS')) &&
          <p>Baixe agora mesmo na sua loja</p>
        }
      </Container>
    </>

  )
}

export default App
