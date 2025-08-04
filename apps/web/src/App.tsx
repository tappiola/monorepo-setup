import { Button } from '@repo/ui'
import { formatDate } from '@repo/utils'

const App = () => {
    return (
        <div className="p-6 text-center mx-auto">
            <h1 className="text-2xl font-bold">Web App</h1>
            <p className="mb-4">Date from utils: {formatDate(new Date())}</p>
            <Button onClick={()=> {}}>Click me</Button>
        </div>
    )
}

export default App
