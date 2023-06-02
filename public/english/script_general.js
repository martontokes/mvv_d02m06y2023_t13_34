(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"mediaActivationMode":"window","mobileMipmappingEnabled":false,"children":["this.MainViewer"],"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"start":"this.init()","scrollBarColor":"#000000","defaultVRPointer":"laser","paddingLeft":0,"borderSize":0,"horizontalAlign":"left","propagateClick":false,"width":"100%","downloadEnabled":false,"paddingRight":0,"id":"rootPlayer","height":"100%","scripts":{"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"playAudioList":TDV.Tour.Script.playAudioList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"getKey":TDV.Tour.Script.getKey,"getOverlays":TDV.Tour.Script.getOverlays,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"setValue":TDV.Tour.Script.setValue,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openLink":TDV.Tour.Script.openLink,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initGA":TDV.Tour.Script.initGA,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizFinish":TDV.Tour.Script.quizFinish,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"scrollBarWidth":10,"class":"Player","paddingTop":0,"contentOpaque":false,"scrollBarMargin":2,"paddingBottom":0,"definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.media_C75FB92A_CC78_8C83_41E0_E752A6D34681_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.media_C75FB92A_CC78_8C83_41E0_E752A6D34681"}]},{"playbackBarRight":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowVerticalLength":0,"toolTipBorderRadius":3,"progressLeft":0,"toolTipFontSize":"1.11vmin","progressRight":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderRadius":0,"displayTooltipInSurfaceSelection":true,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowSpread":0,"progressOpacity":1,"borderSize":0,"progressBarBackgroundColorDirection":"vertical","transitionDuration":500,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","propagateClick":false,"toolTipPaddingLeft":6,"toolTipTextShadowOpacity":0,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"progressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","displayTooltipInTouchScreens":true,"playbackBarBorderRadius":0,"progressBarBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","paddingTop":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","subtitlesPaddingBottom":5,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"surfaceReticleOpacity":0.6,"vrPointerSelectionColor":"#FF6600","paddingBottom":0,"progressBarOpacity":1,"firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarProgressOpacity":1,"toolTipHorizontalAlign":"center","playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","borderRadius":0,"subtitlesTextShadowBlurRadius":0,"progressBottom":0,"playbackBarLeft":0,"subtitlesTextDecoration":"none","surfaceReticleSelectionOpacity":1,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"toolTipShadowHorizontalLength":0,"toolTipOpacity":1,"shadow":false,"progressHeight":10,"playbackBarHeadShadowColor":"#000000","vrPointerSelectionTime":2000,"subtitlesShadow":false,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","progressBorderSize":0,"toolTipFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"subtitlesOpacity":1,"paddingLeft":0,"subtitlesGap":0,"subtitlesHorizontalAlign":"center","toolTipBorderSize":1,"subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingRight":0,"playbackBarOpacity":1,"transitionMode":"blending","subtitlesTextShadowOpacity":1,"width":"100%","progressBarBorderRadius":0,"toolTipFontStyle":"normal","playbackBarHeadOpacity":1,"toolTipPaddingBottom":4,"id":"MainViewer","toolTipShadowVerticalLength":0,"playbackBarBottom":5,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBorderSize":0,"progressBarBorderSize":0,"progressBackgroundOpacity":1,"class":"ViewerArea","toolTipFontWeight":"normal","height":"100%","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarHeight":10,"subtitlesTextShadowVerticalLength":1,"subtitlesFontWeight":"normal","toolTipShadowBlurRadius":3,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"subtitlesPaddingRight":5,"minHeight":50,"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"progressBorderRadius":0,"toolTipPaddingRight":6,"minWidth":100,"playbackBarBackgroundColorDirection":"vertical"},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer","displayPlaybackBar":true},{"id":"media_C75FB92A_CC78_8C83_41E0_E752A6D34681","hfovMax":140,"thumbnailUrl":"media/media_C75FB92A_CC78_8C83_41E0_E752A6D34681_t.jpg","label":trans('media_C75FB92A_CC78_8C83_41E0_E752A6D34681.label'),"class":"Video360","vfov":180,"loop":true,"pitch":0,"partial":false,"hfov":360,"data":{"label":"Elaine"},"hfovMin":60,"video":[{"width":3840,"type":"video/mp4","height":1920,"framerate":50,"class":"Video360Resource","bitrate":10329,"posterURL":"media/media_C75FB92A_CC78_8C83_41E0_E752A6D34681_poster.jpg","url":"media/media_C75FB92A_CC78_8C83_41E0_E752A6D34681.mp4"},{"width":3168,"type":"video/mp4","height":1584,"framerate":25,"class":"Video360Resource","bitrate":9408,"posterURL":"media/media_C75FB92A_CC78_8C83_41E0_E752A6D34681_poster.jpg","url":"media/media_C75FB92A_CC78_8C83_41E0_E752A6D34681_ios.mp4"}]},{"id":"media_C75FB92A_CC78_8C83_41E0_E752A6D34681_camera","manualZoomSpeed":1,"manualRotationSpeed":1800,"automaticZoomSpeed":10,"class":"RotationalCamera","initialPosition":{"class":"RotationalCameraPosition","hfov":120,"yaw":0,"pitch":0},"automaticRotationSpeed":10}],"mouseWheelEnabled":true,"layout":"absolute","borderRadius":0,"verticalAlign":"top","vrPolyfillScale":0.75,"gap":10,"minHeight":20,"toolTipHorizontalAlign":"center","minWidth":20,"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"shadow":false,"overflow":"hidden","data":{"name":"Player605","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1},"defaultLocale":"en"}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.0.js.map
//Generated with v2020.5.0, Mon Jan 4 2021