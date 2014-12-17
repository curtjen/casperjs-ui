var wsTMP =
          '{{#each myTest}}' +
            '<li class="casp-block">' +
              '<div class="casp-heading">' +
                '<span class="casp-title">{{title}}</span>' +
                '<span class="label">{{options.msg}}</span>' +
                '<a href="#">edit</a>' +
                '<i class="fa fa-chevron-down toggle-btn"></i>' +
              '</div>' +
              '{{#if children}}' +
                '<ul class="toggle-1">' +
                  '{{#each children}}' +
                    '<li class="casp-block">' +
                      '<div class="casp-heading">' +
                        '<span class="casp-title">{{title}}</span>' +
                        '<span class="label">{{options.msg}}</span>' +
                        '<a href="#">edit</a>' +
                        '<i class="fa fa-chevron-down toggle-btn"></i>' +
                      '</div>' +
                      '{{#if children}}' +
                        '<ul>' +
                          '{{#each children}}' +
                            '<li class="casp-block">' +
                              '<div class="casp-heading">' +
                                '<span class="casp-title">{{title}}</span>' +
                                '<span class="label">{{options.msg}}</span>' +
                                '<a href="#">edit</a>' +
                                '<i class="fa fa-chevron-down toggle-btn"></i>' +
                              '</div>' +
                            '</li>' +
                          '{{/each}}' +
                        '</ul>' +
                      '{{/if}}' +
                    '</li>' +
                  '{{/each}}' +
                '</ul>' +
              '{{/if}}' +
            '</li>' +
          '{{/each}}';