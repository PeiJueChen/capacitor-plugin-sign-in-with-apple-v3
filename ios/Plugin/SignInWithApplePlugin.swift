import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SignInWithApplePlugin)
public class SignInWithApplePlugin: CAPPlugin {
    private var implementation: SignInWithApple?
    
    
    override public func load() {
        implementation = SignInWithApple(viewController: self.bridge?.viewController)
    }

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation?.echo(value) ?? ""
        ])
    }

    @objc func getCanShowButton(_ call: CAPPluginCall) {
        call.resolve([
            "value": implementation?.canShowButton ?? false
        ])
    }

    @objc func login(_ call: CAPPluginCall) {
        implementation?.login { (result) in
            var r: [String: Any] = [:]
            if let info = result as? [String : Any] {
                r = info
            }
            call.resolve(r)
        }
    }

    @objc func checkStateWithUserID(_ call: CAPPluginCall) {
        guard let id = call.options["userId"] as? String else {return}
        implementation?.checkState(withUserID: id) { (result) in
            var r: [String: Any] = [:]
            if let info = result as? [String : Any] {
                r = info
            }
            call.resolve(r)
        }
    }
}
