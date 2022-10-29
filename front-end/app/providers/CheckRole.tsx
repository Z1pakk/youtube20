import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from '@/providers/private-route.interface'
import { useAuth } from '@/hooks/useAuth'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { user, isLoading } = useAuth()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (user) return <Children />

	if (isOnlyUser && pathname !== '/') replace('/')

	return null
}

export default CheckRole
