import { render } from 'react-dom'

export default class extends React.Component {
  ref = 1
  count = 5

  createRefComponents = () => {
    let results = []
    for (let i = 2; i < this.count + 1; i++) {
      results.push(<div key={i} ref={i} />)
    }
    return results
  }

  getNewContent = posts => {
    return (
      <div>
        <div>{`more ${posts}`}</div>
        {this.ref < this.count - 1
          ? <button
              className='more-component'
              onClick={() => this.draw()}
            >{`More`}</button>
          : <div />}
      </div>
    )
  }

  draw = () => {
    let nextRef = this.ref + 1
    let newJsx = this.getNewContent(nextRef)
    document
      .querySelectorAll('.more-component')
      .forEach(c => (c.style.display = 'none'))
    render(newJsx, this.refs[nextRef])
    this.ref = nextRef
  }

  render () {
    return (
      <div>
        <div>{`initial content`}</div>
        {this.getNewContent(this.ref)}
        {this.createRefComponents()}
      </div>
    )
  }
}
