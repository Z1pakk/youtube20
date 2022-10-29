import { NextPageAuth } from '@/providers/private-route.interface'

const StudioPage: NextPageAuth = () => {
	return <div>Studio</div>
}

StudioPage.isOnlyUser = true

export default StudioPage
