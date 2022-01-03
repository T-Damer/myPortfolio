import { sectionContainer } from 'components/SharedStyles'
import { gradientText } from 'components/Text'
import { Component } from 'react'
import { classnames } from 'classnames/tailwind'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const padding3 = classnames('p-3')

class CopyrightPage extends Component {
  render() {
    return (
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
      >
        <div className={sectionContainer} data-scroll-container>
          <div className="glassWrapper flex-col justify-start space-y-6 text-white">
            <h2 className={gradientText}>
              Copyright 2021 |
              <a href="https://github.com/T-Damer" className="font-bold">
                Daniil Pankov
              </a>
            </h2>
            <p className={padding3}>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions: The above
              copyright notice and this permission notice shall be included in
              all copies or substantial portions of the Software.
            </p>
            <p className={padding3}>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </LocomotiveScrollProvider>
    )
  }
}

export default CopyrightPage
