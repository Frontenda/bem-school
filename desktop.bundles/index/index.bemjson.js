module.exports = {
	block: 'page',
	title: 'Title of the page',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: '../../assets/fonts/fonts.css' }
	],
	mix: { block: 'theme', mods: { color: 'default', size: 'default', space: 'default' } },
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	content: [
	{
		block: 'content',
		content: [
		{
			block: 'ex-operations',
			mix: { block: 'pt-list', mods: { view: 'default', 'border': 'all' } },
			content: [
			{
				elem: 'item',
				mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-v': 'm', 'space-h': 'xl', 'border': 'bottom' } },
				content: [
				{
					block: 'text',
					mods: { view: 'primary', size: 'xl', weight: 'semibold' },
					content: 'История операций'
				}]
			},
			{
				elem: 'item',
				mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'xl' } },
				content: [
				{
					elem: 'row',
					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-t': 's', 'space-b': 's', 'border': 'bottom' } },
					content: [
					{
						elem: 'date',
						content: {
							block: 'text',
							mods: { size: 'm', align: 'center' },
							content: [
							'11 окт',
							{
								block: 'text',
								mods: { view: 'secondary', display: 'inline-block' },
								mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
								content: '14:44'
							}]
						}
					},
					{
						elem: 'name',
						mix: { block: 'decorator', mods: { 'indent-h': 'xxl' } },
						content: {
							block: 'pt-icon-plus',
							mods: { 'vertical-align': 'center' },
							content: [
							{
								elem: 'icon',
								elemMods: { 'indent-right': 's' },
								content: {
									block: 'brand-logo',
									mods: { size: 's', name: 'sberbank' }
								}
							},
							{
								elem: 'block',
								content: [
								{
									block: 'text',
									mods: { size: 'm' },
									content: 'Пополнение карты'
								}]
							}]
						}
					},
					{
						elem: 'summ',
						mix: { block: 'text', mods: { size: 'l', view: 'income' } },
						content: '+ 225 ₽'
					}]
				},
				{
					elem: 'row',
					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-t': 's', 'space-b': 's', 'border': 'bottom' } },
					content: [
					{
						elem: 'date',
						content: {
							block: 'text',
							mods: { size: 'm', align: 'center' },
							content: [
							'11 окт',
							{
								block: 'text',
								mods: { view: 'secondary', display: 'inline-block' },
								mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
								content: '14:16'
							}]
						}
					},
					{
						elem: 'name',
						mix: { block: 'decorator', mods: { 'indent-h': 'xxl' } },
						content: {
							block: 'pt-icon-plus',
							mods: { 'vertical-align': 'center' },
							content: [
							{
								elem: 'icon',
								elemMods: { 'indent-right': 's' },
								content: {
									block: 'brand-logo',
									mods: { size: 's', name: 'beeline' }
								}
							},
							{
								elem: 'block',
								content: [
								{
									block: 'text',
									mods: { size: 'm' },
									content: 'Оплата мобильной связи'
								}]
							}]
						}
					},
					{
						elem: 'summ',
						mix: { block: 'text', mods: { size: 'l', view: 'primary' } },
						content: '- 300 ₽'
					}]
				},
				{
					elem: 'row',
					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-t': 's', 'space-b': 's', 'border': 'bottom' } },
					content: [
					{
						elem: 'date',
						content: {
							block: 'text',
							mods: { size: 'm', align: 'center' },
							content: [
							'11 окт',
							{
								block: 'text',
								mods: { view: 'secondary', display: 'inline-block' },
								mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
								content: '13:49'
							}]
						}
					},
					{
						elem: 'name',
						mix: { block: 'decorator', mods: { 'indent-h': 'xxl' } },
						content: {
							block: 'pt-icon-plus',
							mods: { 'vertical-align': 'center' },
							content: [
							{
								elem: 'icon',
								elemMods: { 'indent-right': 's' },
								content: {
									block: 'brand-logo',
									mods: { size: 's', name: 'itunes' }
								}
							},
							{
								elem: 'block',
								content: [
								{
									block: 'text',
									mods: { size: 'm' },
									content: 'Покупка в iTunes'
								}]
							}]
						}
					},
					{
						elem: 'summ',
						mix: { block: 'text', mods: { size: 'l', view: 'primary' } },
						content: '- 100 ₽'
					}]
				},
				{
					elem: 'row',
					mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-t': 's', 'space-b': 's', 'border': 'bottom' } },
					content: [
					{
						elem: 'date',
						content: {
							block: 'text',
							mods: { size: 'm', align: 'center' },
							content: [
							'11 окт',
							{
								block: 'text',
								mods: { view: 'secondary', display: 'inline-block' },
								mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
								content: '11:37'
							}]
						}
					},
					{
						elem: 'name',
						mix: { block: 'decorator', mods: { 'indent-h': 'xxl' } },
						content: {
							block: 'pt-icon-plus',
							mods: { 'vertical-align': 'center' },
							content: [
							{
								elem: 'icon',
								elemMods: { 'indent-right': 's' },
								content: {
									block: 'brand-logo',
									mods: { size: 's', name: 'ymarket' }
								}
							},
							{
								elem: 'block',
								content: [
								{
									block: 'text',
									mods: { size: 'm' },
									content: 'Покупка на Маркете'
								}]
							}]
						}
					},
					{
						elem: 'summ',
						mix: { block: 'text', mods: { size: 'l', view: 'primary' } },
						content: '- 2 781 ₽'
					}]
				}]
			}]
		}]
	}]
};
