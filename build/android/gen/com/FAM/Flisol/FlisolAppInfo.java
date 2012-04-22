package com.FAM.Flisol;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class FlisolAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public FlisolAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setString("ti.deploytype", "test");
					appProperties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "com.FAM.Flisol";
	}
	
	public String getName() {
		return "Flisol";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "addiel";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2012 by addiel";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "28fe8a94-4e1f-4f00-a927-259485b74af8";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
