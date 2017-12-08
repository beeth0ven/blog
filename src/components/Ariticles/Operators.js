import React, { Component } from 'react';
import SwiftCode from '../Internal/Codes/SwiftCode';
import DiffCode from '../Internal/Codes/DiffCode';
import CollapseDiv from '../Internal/CollapseDiv';
import { H1, H2, H3, H4, H5, H6 } from '../Internal/H1';

class Operators extends Component {

  render() {
    return (
      <div>
        <H1>Operator</H1>
        <H2>Operator</H2>
        <H3>Operator</H3>
        <H4>Operator</H4>
        <H5>Operator</H5>
        <H6>Operator</H6>
        <div>Hallo Luo jie</div>
        <CollapseDiv>
          <DiffCode>{`
            public class AnyObservable<Element>: ObservableType {

            +   public typealias E = Element

            -   private let _subscribe: (AnyObserver<E>) -> Disposable

            +   public init(_ subscribe: @escaping (AnyObserver<E>) -> Disposable) {
            -       _subscribe = subscribe
                }

                public func subscribe<O: ObserverType>(_ observer: O) -> Disposable where O.E == E {
                    let anyObserver = AnyObserver(observer.on)
                    return _subscribe(anyObserver)
                }
            }
        `}</DiffCode>
        </CollapseDiv>
        <CollapseDiv>
          <SwiftCode>{`
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
        `}</SwiftCode>
        </CollapseDiv>
        <CollapseDiv>
          <SwiftCode>{`
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
        `}</SwiftCode>
        </CollapseDiv>
      </div>
    )
  }
}

export default Operators;
