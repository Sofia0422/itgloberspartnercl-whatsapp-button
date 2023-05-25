import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height:number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {

  const formatedMessage = message.replace(/ /g, "%20")
  /* console.log("Mi mensaje formateado es", formattedMessage, logo) */
  return (
  <>
    <div className='fixed bottom-2 right-2 flex felxColumn z-999'>
      <a
      href={`https://wa.me/${phone}?text=${formatedMessage}`}
      target="_blank"
      rel="noreferrer noopener"
      >
        <img
        src={logo}
        alt="Logo de WhatsApp"
        width={width}
        height={height}
        />
      </a>
    </div>
  </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  height:PropTypes.number,
  width: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo-png",
  phone: "3102457898",
  message: "Leonisa",
  height: 60,
  widht: 60
}

WhatsappButton.schema = {
  title:"WhatsApp Button",
  type: "object",
  properties: {
    logo: {
      title:"WhatsApp logo that is related to the brand",
      type: "string",
      widget:{
        "ui:widget": "image-uploader"
      }
    },
    phone:{
      title:"Phone",
      description:"Please add the phone number",
      type:"string"
    },
    message:{
      title:"Message",
      description:"Please add the message that will be seen for your client",
      type:"string",
      widget:{
        "ui:widget": "textarea"
      }
    }
  }
}

export default WhatsappButton;
