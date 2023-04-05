
export default function functionComponent(props) {
    const { bg } = props
    console.log(props,'prop')
    return (
        <div style={{ background: bg }}>functionComponent</div>
    )
}
