/**
 * Created by hama on 2016/11/18.
 */
module.exports = {
    debug:true,
    session_secret:'ylCMS_secret',
    auth_cookie_name: 'ylCMS',
    encrypt_key:'yl',
    URL:'mongodb://localhost:27017/BBS',
    DB:'BBS',
    HOST:'',
    PORT:27017,
    USERNAME:'',
    PASSWORD:'',
    //本地缓存设置
    redis_host:'127.0.0.1',
    redis_port:6379,
    redis_psd:'',
    redis_db:0,
    //邮件设置
    /*site_email:'anyanglizhiyuan@163.com',
    site_email_psd:'lizhi123123',
    email_findPsd : 'findPsd',
    email_reg_active : 'reg_active',
    email_notice_contentMsg : 'notice_contentMsg',
    email_notice_contentBug : 'notice_contentBug',
    email_notice_user_contentMsg : 'notice_user_contentMsg',
    email_notice_user_reg : 'notice_user_reg',*/
    //站点基础信息
    SITETITLE:'JS中文社区',
    SITEDOMAIN : 'http://localhost:3000', // 站点域名
}