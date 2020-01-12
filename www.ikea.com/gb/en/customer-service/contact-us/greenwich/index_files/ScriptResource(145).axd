// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=0M3Lb0JeKGPikwc9csi6pD-lRnF3wydeGecave6tXlW1H2h7Wj2zX7oTgeRszY23JUHAHpl__6a9fVYfFDpN_4qdc93qobChxqyC99IPJU65KPMCZESr1ZyZzQXVWRSClxi6TCI2skwBPNzrgyKbkQ2&t=635226410428220000',
            GROUP: 'WebResource.axd?d=e9eQ74uAu6tBfSnuvEtmOh0RKB9s89r5tBlnkOuaaOuy2jJJbGPM7Hw3xz0Dm1TO2_49rGGmXCnzyDve-Ph1enzRdEr9NxQoyEvVsyK8ZGaJRuQ4K4CIYkHoUF_sKIKfIYc0knMvemZmRGXRyrJ7DGx0IR0ZOmjn8aZtZHNLR4M1&t=635226410428220000',
            HOVER: 'WebResource.axd?d=VmZNyXdLziUzmdx8Rdp5fa8eG5nr2SOI0irY11vHXV9vyLdLTAdo5h4f-KQBfz0GrxByV8AFyfps-YraDuho-4XmoBdpnIN5yrCWyJ7sBHN6B1p86QlyAOl5gQTFqbJWLEl0MaNY28DgHymqMbTV0w2&t=635226410428220000',
            DOWN: 'WebResource.axd?d=w3z1EtYVyD-SNGdhJAHnLMkxK02PLk84-pkYQ6yyE2gfKiigbRnkCdsMe46DbFuz0XrT1-e2D699E0mJ8-W1z_WWlryllcxjv0HrWxsF0vGTGpjrVCeg2oUtL4rQ6Mq2stfu7IohQFbNeYvidEzycQ2&t=635226410428220000'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=fG1EMC9_bMFFwML5UtfMYAaKlAJJuLzNi6A_w9Uwqq2yVtoWPJY6aZ07PVrqqXbpquusEfZh-n_JpTW_3-_A5BGkjRmzsbALAdzOg7slc2YQpIHqsVN47RgJWWvPS_UZynTK5Yb-yN9O3lecfsK0fw2&t=635226410428220000',
            GROUP: 'WebResource.axd?d=FXnGFnTT4ziJaZqhGco9sG_yMlKu93ubMvl1xp6ParrBHtTBH2LZGQva0iwETbzBEmsr4C9YXmZLQTTJpG_hx4hAmYzVSvBoa5Ts7jbLp41YyXhU6oyu8bSBQ3cNB3G3QR3_bENJ_cVy2DSeakse3wOV1FL4CRzWG__Kxg7ydSc1&t=635226410428220000',
            HOVER: 'WebResource.axd?d=dWWkr5jZTHENF_VttwC0vzCX7urEikcIbJzJ7sfcExRxPkI4S1vZdxXuvUZYL_DhOkW9d0_T_xqV2MsUZ_4jbsvFYAAxFKl2ei_6jLexX_6EqON2Xlz5tOfLgWEt0N7DJNfd3gU25H5LBC6yy_ZMOg2&t=635226410428220000',
            DOWN: 'WebResource.axd?d=8WD06M6ENzgsyyXxD1sGLWzLBGOCpHztKZnVy2HwP-pt-pVfdwhBA3v1JW-EMGRNf1s3nrMCqQKY6v7RE_wOuvY0lxLFRW2fzvQB9-hFOrQyOfIAETbb1wY-ncotvIZoe0qBt8EHGzMzKcLN9Fu4FN5SRw5XRSHGSWjbANgdCJ81&t=635226410428220000'
        },
        home: {
            REST: 'WebResource.axd?d=dbAstmAhmzaQk8tWs4iURwtsUQWOv304lfwaorLSVao6rNKaTd-hhlAv5Jx7Zf4ppWqPuQPz-8YFVxpGuIXhCBeJHglohVZQKOx12Uf4THzgAmqyIJiwH2arvCXItkDcLFU73PpTSiwzcilj5Gxv4Q2&t=635226410428220000',
            GROUP: 'WebResource.axd?d=fw-6s8fUwLUEQbCi4Bge5ax_iAdCvoRbEhp01L9vaJGagz8pV8Gqf8XrdYUkoW2li1qrL2r8-lmbVdZn8QX6BKwHvnaNbMhARN1dfCyYFBo07FoRXBsIG5rbcJfbDhxE9Rg54OAdq0jdY0GHBUnmWQd6u3Qq9TBmSOYdJJuv7II1&t=635226410428220000',
            HOVER: 'WebResource.axd?d=SFfJO1ZNxnM46ubwfOEDp0KjVoX_T7OSKskNxTspKfyJ-7RcUgrF1keG0RcsfWzAr_e55GDOwF4bia9dGgCdbIfWc58KsLat8C7uepPQ_1ctmnNPr3glplucODywoH42UnkhJv2qb9TNU67yq5YZRw2&t=635226410428220000',
            DOWN: 'WebResource.axd?d=DU4kz0OGLXtl7t3AfpRiI7ow55emjokPCmDNn6uSnAEsGwWz9R_gDyjvOEyq1kW3MXCWMw5wMiDJjNbkm-WZJBwFcxuvkLK2HJSB_Wp7IoE57qA4kiwdP9Hr_AYQyyCwvYgvZ8jkqUNPQA6qroBYCg2&t=635226410428220000'
        },
        fullpage: {
            REST: 'WebResource.axd?d=Mem4lZG-uSVZS_8CQH3W3SuUz2Bn_HVOUS2s3Yl5uy33NtzJJtOXRl5WF2Zzsz6BIUFw80UfTTpiEOVmoruzw7-9doWOkyGUkKi7luw4jLRM385VVnov84yWOaJUX4tQkVBfUVKKr8zIK0ISlY6vVg2&t=635226410428220000',
            GROUP: 'WebResource.axd?d=mHbRGjEBsovAxeYm-BF4q7BaUuoxQP6kz9sbZtk7ClTfmErjX8AjG_R25QNQa_NGjQV5A8JzraqCdR3jWQVc_NS3iu5jRnwDfkpIuL_5I9yVwJaji2dnz5G1JaKRpL_SnNaoUS2i6pPmtnSuH5rRS17DOLX-6QLnajduRQ2ELqI1&t=635226410428220000',
            HOVER: 'WebResource.axd?d=nq1VaOTuo-P3-8gq-y5DxGigd1zW2HxHtAlBzH8kzP5O_Ys4eFDvZiTdcuY6IYhPRY9MHcAlhUy1jWB4BHMoMC110eActsc9TYScDrq1FhvnVNiMX8QMpher4aQPQQ5tyJOhBePWiVap-cTIeytyqw2&t=635226410428220000',
            DOWN: 'WebResource.axd?d=ihKz0t0jYHnhdMfkybxsaNPxSYV44Pked0xdtNWhigA2D7M2vjAC1TPFJ3PPwNeVpYk4orW0a77JkDq_asJKlJrMl6rZXWJKH1mt-7tPdc2YqK6ExR8sLTDromzhPQgqCcTlN1XYWZ_YFyMXmfhBVX4FsqLDDScfX1B4gKI3V_g1&t=635226410428220000'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
