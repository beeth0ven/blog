import React, { Component } from 'react';
import SwiftCode from '../Internal/Codes/SwiftCode';
import DiffCode from '../Internal/Codes/DiffCode';
import CollapseDiv from '../Internal/ArticleComponents/CollapseDiv';
import { H1, H2, H3, H4, H5, H6 } from '../Internal/ArticleComponents/H1';
import Text from '../Internal/ArticleComponents/Text';
import { OrderedList, List } from '../Internal/ArticleComponents/Lists';
import Table from '../Internal/ArticleComponents/Table';
import { Image } from 'react-bootstrap';

const beeth0venLink = <a href="https://beeth0ven.cf">Beeth0ven</a>;
const image = <Image src='https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png'/>;
const diffCode = <DiffCode>{`
            public class AnyObservable<Element>: ObservableType {

            +   public typealias E = Element
            -
            -   private let _subscribe: (AnyObserver<E>) -> Disposable
            -
            +   public init(_ subscribe: @escaping (AnyObserver<E>) -> Disposable) {
            -       _subscribe = subscribe
                }

                public func subscribe<O: ObserverType>(_ observer: O) -> Disposable where O.E == E {
                    let anyObserver = AnyObserver(observer.on)
                    return _subscribe(anyObserver)
                }
            }
        `}</DiffCode>;
const swiftCode = <SwiftCode>{`
            public class AnyObservable<Element>: ObservableType {

                public typealias E = Element

                private let _subscribe: (AnyObserver<E>) -> Disposable

                public init(_ subscribe: @escaping (AnyObserver<E>) -> Disposable) {
                    _subscribe = subscribe
                }

                public func subscribe<O: ObserverType>(_ observer: O) -> Disposable where O.E == E {
                    let anyObserver = AnyObserver(observer.on)
                    return _subscribe(anyObserver)
                }
            }

            public class AnyObservable<Element>: ObservableType {

                public typealias E = Element

                private let _subscribe: (AnyObserver<E>) -> Disposable

                public init(_ subscribe: @escaping (AnyObserver<E>) -> Disposable) {
                    _subscribe = subscribe
                }

                public func subscribe<O: ObserverType>(_ observer: O) -> Disposable where O.E == E {
                    let anyObserver = AnyObserver(observer.on)
                    return _subscribe(anyObserver)
                }
            }
        `}</SwiftCode>;



class Operators extends Component {

  render() {
    return (
      <div>

        <H1>Operator</H1>

        <Text><b>Hello everyone</b>, I'm new to Rx and MVVM,
          so I hope I don't sound to stupid here.
          I instantiate this collection as a driver by calling a method which uses a URLSession to fetch JSON from a url (<code>URLSession.shared.rx.json</code>),
          and in my ViewController class I instantiate an object of this ViewModel I have created and reference this collection to then drive a <code>UITableView</code> that represents a news feed. Is this the proper way of doing things or am I sorely misguided?
        </Text>

        {Table({
          headerRow: ['Before', 'After'],
          row1:  [diffCode, swiftCode],
        })}

        <Text><b>Hello everyone</b>, I'm new to Rx and MVVM,
          so I hope I don't sound to stupid here {beeth0venLink}.
          I instantiate this collection as a driver by calling a method which uses a URLSession to fetch JSON from a url (<code>URLSession.shared.rx.json</code>),
          and in my ViewController class I instantiate an object of this ViewModel I have created and reference this collection to then drive a <code>UITableView</code> that represents a news feed. Is this the proper way of doing things or am I sorely misguided?
        </Text>

        <OrderedList>
          <li>Hallo</li>
          <li>Hallo</li>
          <li>Hallo</li>
          <li>Hallo</li>
        </OrderedList>

        <H2>Operator</H2>

        <List>
          <li>Hallo</li>
          <li>I'm new to Rx and MVVM,
            so I hope I don't sound to stupid here.I'm new to Rx and MVVM,
            so I hope I don't sound to stupid here.I'm new to Rx and MVVM,
            so I hope I don't sound to stupid here.
          </li>
          <br/>

          <li>
            <div>
              Hallo
              {diffCode}
            </div>
          </li>
          <br/>

          <li>I'm new to Rx and MVVM,
            so I hope I don't sound to stupid here.I'm new to Rx and MVVM,
            so I hope I don't sound to stupid here.
          </li>
        </List>
        <H3>Operator</H3>
        <H4>Operator</H4>
        <H5>Operator</H5>
        <H6>Operator</H6>
        <CollapseDiv>
          {diffCode}
        </CollapseDiv>
        <CollapseDiv>
          {swiftCode}
        </CollapseDiv>
        {image}
        <br/>
        <br/>
      </div>
    )
  }
}

export default Operators;
