import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from '@/providers/private-route.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider