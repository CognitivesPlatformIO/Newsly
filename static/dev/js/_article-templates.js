/**
 * Handlebar Article templates for listing
 */

var systemCardTemplate = '<div itemscope itemtype="http://schema.org/NewsArticle"  class="article {{containerClass}} ">'+
        '<meta itemprop="url" content="{{absoluteUrl}}" />'+
        '<meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="{{absoluteUrl}}"/>'+
        '{{#if hasMedia}}  '+
        '<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">'+
            '<meta itemprop="url" content="{{featuredMedia.media.url}}"/>'+
            '<meta itemprop="width" content="{{featuredMedia.media.width}}"/>'+
            '<meta itemprop="height" content="{{featuredMedia.media.height}}"/>'+
        '</div>'+
        '{{/if}}'+
        '{{#if publisher.url}}  '+
        '<div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">'+
            '<meta itemprop="name" content="{{publisher.name}}"/>'+
            '<div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">'+
                '<meta itemprop="url" content="{{publisher.url}}"/>'+
                '<meta itemprop="width" content="{{publisher.width}}"/>'+
                '<meta itemprop="height" content="{{publisher.height}}"/>'+
            '</div>'+
        '</div>'+
        '{{/if}}'+
        '<meta itemprop="datePublished" content="{{metaPublishDate}}"/>'+
        '<meta itemprop="dateModified" content="{{metaUpdateDate}}"/>'+
        '<a id="Article{{articleId}}" href="{{url}}" class="card swap card__news {{hasArticleMediaClass}} {{promotedClass}} {{blogClass}}" data-id="{{articleId}}" data-position="{{position}}" data-social="0" data-article-image="{{{imageUrl}}}" data-article-text="{{title}}">'+
            '{{#if hasMedia}}  '+
              '<div class="card-image lazyload" data-original="{{imageUrl}}" style="background-image:url({{templatePath}}/static/images/placeholder/placeholder.svg);"></div>'+
            '{{/if}}'+
            '<div class="content-section">'+
                '<div class="title-section">'+
                    '<span>{{label}}</span>'+
                    '<div class="card-icon"></div>'+
                '</div>'+
                '<h1 itemprop="headline" class="heading-section">{{{title}}}</h1>'+
                '<p itemprop="description" class="description">{{{excerpt}}}</p>'+
                '<div class="caption_bottom" itemprop="author" itemscope itemtype="https://schema.org/Person">'+
                    '<div class="author_name" itemprop="name">{{createdBy.displayName}}</div>'+
                    '<div class="post_date">{{publishDate}}</div>'+
                    '<span class="category_share_icon shareIcons"><i class="fa fa-share-alt"></i></span>'+
                '</div>'+
            '</div>'+
            '{{#if userHasBlogAccess}}'+
                '<div class="btn_overlay articleMenu">'+
                    '<button title="Hide" data-guid="{{guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="0">'+
                        '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                    '</button>'+
                    '{{#if userHasEditArticleAccess}}'+
                        '<button onclick="window.location=\'{{{editUrl}}}\'; return false;" title="Edit" class="btnhide social-tooltip" type="button">'+
                            '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                        '</button>'+
                    "{{/if}}"+
                    '<button data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn {{#if isPinned}} selected {{/if}}" type="button" data-status="{{isPinned}}">'+
                        '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                    '</button>'+
                '</div>'+
                "{{/if}}"+
            '</a>'+
        '</div>';
                                                
var socialCardTemplate =  '<div class="{{containerClass}}">' +
                                '<a href="{{social.url}}" id="Social{{socialId}}" target="_blank" class="card swap card__{{social.source}} {{#if social.hasMedia}} withImage__content {{else }} without__image {{/if}} {{videoClass}}" data-id="{{socialId}}" data-position="{{position}}" data-social="1" data-article-image="{{{social.media.path}}}" data-article-text="{{social.content}}">'+
                                    '{{#if social.hasMedia}}'+
                                    '<div class="card-image lazyload" data-original="{{social.media.path}}" style="background-image:url({{templatePath}}/static/images/placeholder/placeholder.svg)">'+
                                        '<div class="play_icon video-player" data-source="{{social.source}}" data-url="{{social.media.videoUrl}}" data-poster="{{social.media.path}}"></div>'+
                                    '</div>' +
                                    '{{/if}}'+
                                    '<div class="content-section">' +
                                        '<div class="title-section">' +
                                            '<span>{{social.source}}</span>' +
                                            '<div class="card-icon"></div>' +
                                        '</div>' +
                                        '<p class="description" id="updateSocial{{socialId}}" data-update="0">{{{social.content}}}</p>' +
                                        '<div class="caption_bottom">' +
                                            '<div class="author_name">{{social.user.name}}</div>' +
                                            '<div class="post_date">{{social.publishDate}}</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '{{#if userHasBlogAccess}}'+
                                        '<div class="btn_overlay articleMenu">'+
                                            '<button title="Hide" data-guid="{{social.guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="1">'+
                                                '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                                            '</button>'+
                                            '{{#if userHasEditArticleAccess}}'+
                                                '<button title="Edit" class="btnhide social-tooltip editSocialPost" type="button" data-url="/admin/social-funnel/update-social?guid={{social.blog.guid}}&socialguid={{social.guid}}">'+
                                                '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                                                '</button>'+
                                            '{{/if}}'+ 
                                            '<button data-position="{{position}}" data-social="1" data-id="{{socialId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn {{#if isPinned}} selected {{/if}}" type="button" data-status="{{isPinned}}">'+
                                                '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                                            '</button>'+
                                        '</div>'+
                                    '{{/if}}'+   
                                '</a>' +
                            '</div>';