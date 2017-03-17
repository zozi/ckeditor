/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	config.height = '400px';

	config.allowedContent = true;

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Strike,Subscript,Superscript,Anchor';

	config.removePlugins = 'scayt';

	config.extraPlugins = 'confighelper,wordcount,notification,dragdrop,table,horizontalrule';

	config.wordcount = {

	    showWordCount: false,

	    showCharCount: true,

    	showParagraphs: false,

	    maxCharCount: 30000,

    	countSpacesAsChars: true,

    	pasteWarningDuration: 0,

    	filter: new CKEDITOR.htmlParser.filter({
	        elements: {
	            span: function( element ) {
	                if(element.attributes.class === 'dropped-field') {
	                    return true;
	                }
	            }
	        }
	    })    
	};

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
