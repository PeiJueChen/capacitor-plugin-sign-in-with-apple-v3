package capacitor.plugin.sign.in.with.apple.v3;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SignInWithApple")
public class SignInWithApplePlugin extends Plugin {

    private SignInWithApple implementation = new SignInWithApple();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getCanShowButton(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "getCanShowButton method only works on ios ");
        call.resolve(ret);
    }

    @PluginMethod
    public void login(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "login method only works on ios ");
        call.resolve(ret);
    }

    @PluginMethod
    public void checkStateWithUserID(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "checkStateWithUserID method only works on ios ");
        call.resolve(ret);
    }
}
