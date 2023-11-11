import Placeholder from '../../assets/general/General.Placeholder-web.jpg'

export const packagesOptions = [
    {
        title:      'Demo Basic',
        nickName:   'Básico',
        features:    [
            'Landing Page',
            'Diseño Menu Digital',
            'Código QR',
            'Pedidos Directos a tu whatsapp',
            'Ten cards o etiquetas con código QR para tu negocio',
            'Poster con código QR para tu negocio',
            'Shotting de productos (4 platillos)'
        ],
        price:      2600,
        color:      'gray-two',
        path:       'basic',
        elements:   [
            {
                subtitle:   'Diseño 01',
                subPath:    'option-01',
                picture:    Placeholder
            },                {
                subtitle:   'Diseño 02',
                subPath:    'option-02',
                picture:    Placeholder
            },{
                subtitle:   'Diseño 03',
                subPath:    'option-03',
                picture:    Placeholder
            },{
                subtitle:   'Diseño 04',
                subPath:    'option-04',
                picture:    Placeholder
            }
        ]
    },{
        title:      'Demo Premium',
        nickName:   'Premium',
        features:    [
            'Asesoría personalizada',
            'Configuración de perfil empresarial',
            'Catálogo con fotografías de tu producto (20 productos)',
            'Configuración de respuestas rápidas',
            'Vinculación de productos del catálogo a tu sitio web',
            'Asesorías post compra'
        ],
        price:      3500,
        color:      'gray-four',
        path:       'premium',
        elements:   [
            {
                subtitle:   'Diseño 01',
                subPath:    'option-01'
            }
        ]
    },{
        title:      'Demo Platinum',
        nickName:   'Platinum',
        features:    [
            'Asesoría personalizada',
            'Configuración de perfil empresarial',
            'Catálogo con fotografías de tu producto (20 productos)',
            'Configuración de respuestas rápidas',
            'Vinculación de productos del catálogo a tu sitio web',
            'Asesorías post compra'
        ],
        price:      4000,
        color:      'gray-six',
        path:       'platinum',
        elements:   [
            {
                subtitle:   'Diseño 01',
                subPath:    'option-01'
            }
        ]
    }
]