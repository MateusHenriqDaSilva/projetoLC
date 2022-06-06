import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'
import Image from 'next/image'
import avatar from '../../../public/images/avatar.svg'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    const myLoader = () => {
        return usuario?.imagemUrl ?? '/vercel.svg'
    }

    return (
        <Link href="/perfil" passHref>
            <Image
                loader={myLoader}
                src='me.png'
                width={40}
                height={40}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}